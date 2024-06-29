'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div>
        <label className="font-medium">Email</label>
        <Input
          type="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Password</label>
        <Input
          type="password"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between text-sm">
        {/* <a
          href="javascript:void(0)"
          className="text-center text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </a> */}
      </div>
      <Button className="w-full px-4 py-2 ">
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
