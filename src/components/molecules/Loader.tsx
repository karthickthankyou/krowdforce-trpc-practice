import { Loader as LoaderIcon } from 'lucide-react'
import { AlertSection } from './AlertSection'

export const Loader = () => <LoaderIcon className="animate-spin" />

export const LoaderPanel = ({ title }: { title?: string }) => (
  <AlertSection title={title}>
    <Loader />
  </AlertSection>
)
