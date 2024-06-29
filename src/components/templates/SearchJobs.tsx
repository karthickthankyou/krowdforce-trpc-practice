import { DisplayJobs } from '../organisms/DisplayJobs'
import { Map } from '../organisms/Map/Map'
import { Panel } from '../organisms/Map/Panel'
import { DefaultZoomControls } from '../organisms/Map/ZoomControls'

export const SearchJobs = () => {
  return (
    <Map>
      <DisplayJobs />
      <Panel variants={{ position: 'right-center' }}>
        <DefaultZoomControls />
      </Panel>
    </Map>
  )
}
