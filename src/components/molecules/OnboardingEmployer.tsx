'use client'
import { trpcClient } from '@/trpc/clients/client'
import { useQueryClient } from '@tanstack/react-query'
import { getQueryKey } from '@trpc/react-query'
import { Map } from '@/components/organisms/Map/Map'
import { MapMarker } from '@/components/organisms/Map/MapMarker'
import { useFormContext, useWatch } from 'react-hook-form'
import { CenterOfMap, DefaultZoomControls } from '../organisms/Map/ZoomControls'
import { Panel } from '../organisms/Map/Panel'
import { Form } from '../atoms/Form'
import { Label } from '../atoms/Label'
import { Input } from '../atoms/Input'
import { TextArea } from '../atoms/TextArea'
import { Button } from '../atoms/button'
import { PageTitle } from '../atoms/Typography'
import {
  FormProviderEmployerOnboarding,
  FormTypeEmployerOnboarding,
} from '@/forms/employerOnboarding'

const OnboardingEmployerContent = () => {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useFormContext<FormTypeEmployerOnboarding>()

  const { address } = useWatch<FormTypeEmployerOnboarding>()

  const { isLoading, data, error, mutateAsync } =
    trpcClient.employers.onboarding.useMutation({
      onSuccess() {
        reset()
        const queryKey = getQueryKey(trpcClient.employers.me)
        queryClient.invalidateQueries(queryKey)
      },
    })

  return (
    <div className="flex justify-center gap-2 mt-6">
      <Form
        onSubmit={handleSubmit(async (data) => {
          await mutateAsync(data)
        })}
        className="max-w-96 w-full bg-white p-3 rounded-lg shadow-lg"
      >
        <PageTitle className="mb-3">Employer onboarding</PageTitle>

        <Label title="Address" error={errors.address?.address?.message}>
          <TextArea
            placeholder="123, Thinlane"
            {...register('address.address')}
            rows={3}
          />
        </Label>
        <div className="max-w-96 w-full rounded overflow-hidden">
          <Map
            initialViewState={{
              longitude: 80.2,
              latitude: 12.9,
              zoom: 8,
            }}
            style={{ height: '50vh', width: '100%' }}
          >
            <MapMarker
              address={{ lat: address?.lat || 0, lng: address?.lng || 0 }}
              onChange={({ lat, lng }) => {
                setValue('address.lat', lat)
                setValue('address.lng', lng)
              }}
            />
            <Panel variants={{ position: 'left-top' }}>
              <DefaultZoomControls>
                <CenterOfMap
                  onClick={(latLng) => {
                    const lat = parseFloat(latLng.lat.toFixed(6))
                    const lng = parseFloat(latLng.lng.toFixed(6))
                    setValue('address.lat', lat, { shouldValidate: true })
                    setValue('address.lng', lng, { shouldValidate: true })
                  }}
                />
              </DefaultZoomControls>
            </Panel>
          </Map>
        </div>
        <Button type="submit" loading={isLoading}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export const OnboardingEmployer = () => (
  <FormProviderEmployerOnboarding>
    <OnboardingEmployerContent />
  </FormProviderEmployerOnboarding>
)
