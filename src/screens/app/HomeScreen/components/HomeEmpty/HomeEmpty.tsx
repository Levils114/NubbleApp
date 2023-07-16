import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  isLoading: boolean;
  error: unknown;
  handleRefetch(): void;
}

export function HomeEmpty({isLoading, error, handleRefetch}: Props) {
  let component = (
    <>
      <Text>Não há publicações</Text>
      <Button text="Recarregar" onPress={handleRefetch} mt="s24" />
    </>
  );

  if (isLoading) {
    component = <ActivityIndicator size="large" color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text>Aconteceu um erro</Text>
        <Button text="Recarregar" onPress={handleRefetch} mt="s24" />
      </>
    );
  }

  return (
    <Box alignItems="center" justifyContent="center" flex={1}>
      {component}
    </Box>
  );
}
