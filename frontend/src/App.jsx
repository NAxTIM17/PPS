import { Button, ButtonToolbar } from 'rsuite';

function App() {
  return (
    <div className='min-h-screen grid place-items-center'>
      <ButtonToolbar>
        <Button appearance="default">Default</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="link">Link</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="ghost">Ghost</Button>
      </ButtonToolbar>
    </div>
  );
}

export default App;
