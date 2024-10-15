"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef(null);
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
      console.log("Modal Opened");
    }
  });
  const onHide = () => {
    router.back();
  };
  return createPortal(
    <dialog
      onClick={onHide}
      className="shadow-teal-700 shadow-md border border-gray-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
      ref={modalRef}
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image
          className="bg-white absolute"
          src="/xmark.svg"
          alt="close"
          width={30}
          height={30}
        />
      </span>
      <div>{children}</div>
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
