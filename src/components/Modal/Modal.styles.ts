import ReactModal from 'react-modal'
import styled from 'styled-components'

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: fit-content;
  height: fit-content;
`
