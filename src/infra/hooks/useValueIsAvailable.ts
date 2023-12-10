import {useAuthIsValueAvailable, ValuesToValidate} from '@modules';
import {Path, UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

interface IUseValueIsAvailable<FormSchema> {
  watch: UseFormWatch<FormSchema>;
  getFieldState: UseFormGetFieldState<FormSchema>;
  valueToInvestigate: Path<FormSchema>;
}

export function useValueIsAvailable<FormSchema>({
  watch,
  getFieldState,
  valueToInvestigate,
}: IUseValueIsAvailable<FormSchema>) {
  const valueToInvestigateWatch = watch(valueToInvestigate);

  const valueToInvestigateState = getFieldState(valueToInvestigate);

  const valueToInvestigateIsValid =
    !valueToInvestigateState.invalid && valueToInvestigateState.isDirty;

  const valueToInvestigateQuery = useAuthIsValueAvailable({
    value: valueToInvestigateWatch as string,
    enabled: valueToInvestigateIsValid,
    valueToValidate: valueToInvestigate as ValuesToValidate,
  });

  return valueToInvestigateQuery;
}
