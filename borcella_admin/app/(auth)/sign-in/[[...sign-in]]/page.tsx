import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}


/*
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
}
*/