import { Form } from '../atoms/Form'
import { Label } from '../atoms/Label'
import { Input } from '../atoms/Input'
import { TextArea } from '../atoms/TextArea'
import { Button } from '../atoms/button'
import { useFormJobSchema } from '@/forms/createJob'
import { trpcClient } from '@/trpc/clients/client'
import { useQueryClient } from '@tanstack/react-query'
import { getQueryKey } from '@trpc/react-query'
import { useRouter } from 'next/navigation'

export const CreateJob = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormJobSchema()
  const queryClient = useQueryClient()
  const router = useRouter()

  const { isLoading, mutateAsync } = trpcClient.employers.createJob.useMutation(
    {
      onSuccess() {
        reset()
        queryClient.invalidateQueries(getQueryKey(trpcClient.employers.myJobs))
        router.replace('/employer/jobs')
      },
    },
  )

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        await mutateAsync(data)
      })}
      className="max-w-96 bg-white p-4  rounded shadow-lg"
    >
      <Label title="Title" error={errors.title?.message}>
        <Input {...register('title')} placeholder="Job title" />
      </Label>

      <Label title="Description" error={errors.description?.message}>
        <TextArea
          {...register('description')}
          placeholder="Job description"
          rows={3}
        />
      </Label>

      <Label title="Contact Info" error={errors.contactInfo?.message}>
        <Input
          {...register('contactInfo')}
          placeholder="Contact email or phone"
        />
      </Label>

      <Label title="Skills" error={errors.skills?.message}>
        <Input {...register('skills')} placeholder="Skill 1, Skill 2, ..." />
      </Label>

      <Button loading={isLoading} type="submit">
        Create Job
      </Button>
    </Form>
  )
}
