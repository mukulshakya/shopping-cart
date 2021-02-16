import React, { useEffect } from "react";
import { Button, Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CategoriesRedux from "../redux/reducers/categories.reducer";
import TopHeader from "../components/topHeader";
import Body from "../components/home/body";
import Loader from "../components/loader";
import LoginSignupModal from "../components/loginSignupModal";

function Home() {
  const dispatch = useDispatch();

  const {
    categories: { data: categories, loading: isLoading },
    error: { message: errorMsg },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(CategoriesRedux.actions.fetchCategoriesRequest());

    return () => dispatch(CategoriesRedux.actions.resetCategories());
  }, [dispatch]);

  return (
    <div>
      <Loader isLoading={isLoading} />
      <TopHeader />
      <div id="body">
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            margin: "10px 0",
          }}
        >
          <Link to="/products">
            <Button type="primary" size="medium">
              View All
            </Button>
          </Link>
        </div>
        <Body categories={categories} />
      </div>
      <div style={{ position: "absolute", zIndex: 10 }}>
        <LoginSignupModal />
      </div>
      {errorMsg && (
        <div id="alert">
          <Alert message="Error" description={errorMsg} type="error" closable />
        </div>
      )}
    </div>
  );
}

export default Home;
