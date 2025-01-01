import { UserAuthForm } from './user-auth-form';

export function SignUpViewPage() {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Cadastro
      </h1>
      <p className="text-sm text-muted-foreground">
        Crie uma nova conta
      </p>
      <UserAuthForm />
    </div>
  );
}
