import { ReactNode, useEffect, useRef } from "react";

type Props = {
  open: boolean;
  title: string;
  isButtons?: boolean;
  confirmationYesBtn?: string;
  confirmationNoBtn?: string;
  className: string;
  children: ReactNode;
  handleCloseModal: () => void;
  handleConfirmationAction?: () => void;
};

const CustomModal = ({
  open,
  title,
  children,
  isButtons,
  confirmationYesBtn = "Save",
  confirmationNoBtn = "Cancel",
  className,
  handleCloseModal,
  handleConfirmationAction,
}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    const handleBodyScroll = () => {
      document.body.style.overflow = open ? "hidden" : "";
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
      handleBodyScroll();
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      {open ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                ref={modalRef}
                className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all , ${className}`}
              >
                <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div>
                    <div>
                      <h3 className="font-semibold leading-6 text-2xl">
                        {title}
                      </h3>
                      <div className="mt-2 !w-[100%]">{children}</div>
                    </div>
                  </div>
                </div>
                {isButtons && (
                  <div className="bg-gray-50 px-4 py-3  flex flex-row-reverse gap-x-4">
                    <button
                      type="button"
                      onClick={handleConfirmationAction}
                      className="border w-[120px] px-2 py-1 rounded-md bg-slate-600 text-white"
                    >
                      {confirmationYesBtn}
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="border w-[120px] px-3 py-2 rounded-md bg-transparent border-none"
                    >
                      {confirmationNoBtn}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CustomModal;
