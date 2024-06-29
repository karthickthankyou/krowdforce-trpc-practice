import { trpcClient } from '@/trpc/clients/client'
import { useQueryClient } from '@tanstack/react-query'
import { getQueryKey } from '@trpc/react-query'

export const OnboardingEmployer = () => {
  const queryClient = useQueryClient()

  const { isLoading, data, error, mutateAsync } =
    trpcClient.employers.onboarding.useMutation({
      onSuccess(data, variables, context) {
        const queryKey = getQueryKey(trpcClient.employers.me)
        queryClient.invalidateQueries([queryKey])
      },
    })
}
