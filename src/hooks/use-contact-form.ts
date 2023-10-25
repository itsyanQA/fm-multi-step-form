import { useState } from "react";

export const useContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isEmptyName, setIsEmptyName] = useState<boolean>(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState<boolean>(false);
  const [isEmptyPhone, setIsEmptyPhone] = useState<boolean>(false);

  return {
    values: {
      name,
      email,
      phone,
      isEmptyName,
      isEmptyEmail,
      isEmptyPhone,
    },
    actions: {
      setName,
      setEmail,
      setPhone,
      setIsEmptyName,
      setIsEmptyEmail,
      setIsEmptyPhone,
    },
  };
};
