import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PhonebookContainer } from './App.styled';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <PhonebookContainer>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </PhonebookContainer>
  );
};
