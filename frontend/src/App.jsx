import { Button, ButtonToolbar } from 'rsuite';
import { AuthService } from './services/Auth';
import { useState } from 'react';

function App() {
  const [attemptingLogin, setAttemptingLogin] = useState(false);

  return (
    <div className='min-h-screen grid place-items-center'>
      <ButtonToolbar>
        <Button onClick={() => {
            setAttemptingLogin(true);
            AuthService.login({
                email:  'test@test.com',
                password: 'qwerty1234'
            })
            .then((res) => {
                console.log({ res });
            })
            .catch((err) => {
                console.error({ err });
            })
            .finally(() => {
              setAttemptingLogin(false);
            });
        }}
        appearance="primary">
          {attemptingLogin ? '...' : 'Attempt login as `test testing`'}
        </Button>
        <Button appearance="default">Default</Button>
        <Button appearance="link">Link</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="ghost">Ghost</Button>
      </ButtonToolbar>
    </div>
  );
}

export default App;
