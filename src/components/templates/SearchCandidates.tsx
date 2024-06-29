import { DisplayCandidates } from '../organisms/DisplayCandidates'
import { Map } from '../organisms/Map/Map'
import { Panel } from '../organisms/Map/Panel'
import { DefaultZoomControls } from '../organisms/Map/ZoomControls'

export const SearchCandidates = () => {
  return (
    <Map>
      <DisplayCandidates />
      <Panel variants={{ position: 'right-center' }}>
        <DefaultZoomControls />
      </Panel>
    </Map>
  )
}
