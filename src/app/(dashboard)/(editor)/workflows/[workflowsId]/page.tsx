

interface Props {
  params: Promise<{
    workflowsId: string;
  }>;
}

const page = async ({ params }: Props) => {
  const {workflowsId }= await params;
  return <p>
    {workflowsId}
  </p>
};

export default page;
