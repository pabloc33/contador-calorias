import { useMemo } from "react";
import { useActivity } from "../hooks";
import { CalorieDisplay } from "./CalorieDisplay";

export const CalorieTracker = () => {
  const { state } = useActivity();

  // Contadores (opcionalmente puede trasladarse a activity context y pasarlo como valor[value])
  const caloriesConsumed = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [state.activities]
  );

  const caloriesBurned = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [state.activities]
  );

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [state.activities]
  );

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />

        <CalorieDisplay calories={caloriesBurned} text="Ejercicio" />

        <CalorieDisplay calories={netCalories} text="Diferencia" />
      </div>
    </>
  );
};
