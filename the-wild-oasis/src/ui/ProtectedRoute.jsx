import Spinner from "../ui/Spinner";
import { useUser } from "../features/authentication/useUser";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/* eslint react/prop-types: 0 */

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //  1.load the Authenticated user

  const { isLoading, isAuthenticated } = useUser();

  // 2.If there is no authenticate user  , redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3.while loading , show a spinner

  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4.if there is user , render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
