import AdminOpenAiContainer from "@containers/admin/AdminOpenAiContainer";
import AdminLayout from "@layout/AdminLayout";
import MainLayout from "@layout/MainLayout";

const AiPage = () => {
  return (
    <AdminLayout>
      <AdminOpenAiContainer />
    </AdminLayout>
  )
}

export default AiPage;