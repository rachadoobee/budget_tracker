import {Button, Stack} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function App() {
  return (
      <Container className="my-4">
        <h1 class="text-center">Budget Tracker</h1>
          <Stack direction="horizontal" gap="2" className="mb-4">
            <h4 className="me-auto">Time frame: </h4>
            <DropdownButton variant="secondary" title="Change time frame">
              <Dropdown.Item href="#week-view">Weekly</Dropdown.Item>
              <Dropdown.Item href="#month-view">Monthly</Dropdown.Item>
              <Dropdown.Item href="#3month-view">Last 3 Months</Dropdown.Item>
            </DropdownButton>
          </Stack>
      </Container>
  )
}

export default App;
