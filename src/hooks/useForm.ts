import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialForm: T) => {
  const [activity, setActivity] = useState(initialForm);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(event.target.id);

    setActivity({
      ...activity,
      [event.target.id]: isNumberField
        ? +event.target.value
        : event.target.value,
    });
  };

  return {
    //* Properties
    activity,
    //* Methods
    setActivity,
    handleChange,
  };
};
