import React, { useState, useEffect } from "react";
import { Button, Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CategoriesRedux from "../redux/reducers/categories.reducer";
import TopHeader from "../components/topHeader";
import Body from "../components/home/body";
import Loader from "../components/loader";
import LoginSignupModal from "../components/loginSignupModal";

function Home() {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const dispatch = useDispatch();

  const { data: categories, loading: isLoading, error: errorMsg } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (categories)
      if (!categories.length)
        dispatch(CategoriesRedux.actions.fetchCategoriesRequest());

    return () => dispatch(CategoriesRedux.actions.resetCategories());
  }, []);

  return (
    <div>
      <Loader isLoading={isLoading} />
      <TopHeader
        setIsLoginModalVisible={() =>
          setIsLoginModalVisible(!isLoginModalVisible)
        }
      />
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
        {console.log({ categories })}

        <Body categories={categories} />
      </div>
      <div style={{ position: "absolute", zIndex: 10 }}>
        <LoginSignupModal
          isLoginModalVisible={isLoginModalVisible}
          setIsLoginModalVisible={() =>
            setIsLoginModalVisible(!isLoginModalVisible)
          }
        />
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
