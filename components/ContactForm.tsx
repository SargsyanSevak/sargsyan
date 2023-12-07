"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "@/utils/validations";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormValues {
  name: string;
  lastName: string;
  email: string;
  message: string;
}
export default function ContactForm() {
  const ref = useRef<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async ({}) => {
    if (isValid) {
      await emailjs
        .sendForm(
          "service_pfutrzf",
          "template_xcihneq",
          ref.current,
          "7juDdm_vDM8bVfl97"
        )
        .then(() => {
          toast("Your message has been sent. Thank you.");
          reset();
        });
    } else {
      toast(
        "Sorry, there was an error sending your message. Please try againlater."
      );
    }
  };

  const phoneNumber = "+37444144442";
  const message = "Hello! I would like to get in touch.";
  useEffect(() => {
    const handleClick = () => {
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    };

    const icon = document.getElementById("whatsapp-icon");
    if (icon) {
      icon.addEventListener("click", handleClick);
    }

    return () => {
      if (icon) {
        icon.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="md:py-20 py-16 px-4 w-full">
      <ToastContainer />
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Contact me
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Let’s Connect: Reach Out and Say Hello!
        </p>
      </div>
      <form
        ref={ref}
        encType="multipart/form-data"
        method="post"
        className="mx-auto mt-4 max-w-xl sm:mt-14"
      >
        <div className="flex flex-col gap-y-6 ">
          <div className="border-t border-gray-200 pt-4 contact-form">
            <label className="font-medium text-gray-900 dark:text-white pl-0 md:pl-6 text-lg tracking-wide	">
              What’s your name ?
            </label>
            <div className="mt-2 text-sm text-gray-500 ">
              <input
                type="text"
                placeholder="Doe *"
                className="pl-0 md:pl-6 bg-inherit w-full px-6 outline-none border-none text-lg"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-600 font-medium  pl-0 md:pl-6 text-md tracking-wide">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 contact-form">
            <label className="font-medium text-gray-900 dark:text-white pl-0 md:pl-6 text-lg tracking-wide	">
              What’s your last name ?
            </label>
            <div className="mt-2 text-sm text-gray-500 ">
              <input
                type="text"
                placeholder="Smith *"
                className="pl-0 md:pl-6 w-full px-6 outline-none border-none text-lg bg-inherit"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-600 font-medium  pl-0 md:pl-6 text-md tracking-wide">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 contact-form">
            <label className="font-medium text-gray-900 dark:text-white pl-0 md:pl-6 text-lg tracking-wide	">
              What’s your email ?
            </label>
            <div className="mt-2 text-sm text-gray-500 bg-inherit">
              <input
                type="email"
                placeholder="info@doe.com *"
                className="pl-0 md:pl-6 bg-transparent dark:bg-[#1D2D50] w-full px-6 outline-none border-none text-lg"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600 font-medium  pl-0 md:pl-6 text-md tracking-wide">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 contact-form">
            <label className="font-medium text-gray-900 dark:text-white pl-0 md:pl-6 text-lg tracking-wide	">
              Your message
            </label>
            <div className="mt-2 text-sm text-gray-500 ">
              <textarea
                placeholder="Hello! I would like to get in touch. *"
                className="pl-0 md:pl-6 w-full min-h-20 outline-none border-none text-lg bg-inherit dark:text-gray-200"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-600 font-medium  pl-0 md:pl-6 text-md tracking-wide">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            className="rounded-[24px] w-full bg-[#EDEFF1] border-[1px] py-4 px-10 hover:bg-gray-100 dark:bg-[#133B5C] dark:hover:bg-[#1E5F74]  dark:text-white transition-colors duration-300 text-[20px] flex justify-center items-center gap-2"
            onClick={handleSubmit(onSubmit)}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
