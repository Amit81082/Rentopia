"use client";

import Modal from "./Modal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import React, { useCallback, useState } from "react";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal()
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  try {
    setIsLoading(true);

   let response= await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if( response?.error) {
      toast.error(response.error)
    }
    if(response?.ok) {
      toast.success("Logged in!");
      loginModal.onClose();
      router.refresh();
    }
  } catch (error: any) {
        toast.error(error.response?.data?.error || error.message || "Something went wrong");
  } finally {
    setIsLoading(false);
  }
};


  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div
        className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <div>First time using Rentopia?</div>
          <div
            onClick={toggle}
            className="
              text-rose-500
              cursor-pointer
              hover:underline
            "
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
