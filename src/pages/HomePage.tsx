import Home from "@components/Home";
import ArticleListContainer from "@containers/article/ArticleListContainer";
import MainLayout from "@layout/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <Home />
      <ArticleListContainer />
    </MainLayout>
  );
}

export default HomePage;