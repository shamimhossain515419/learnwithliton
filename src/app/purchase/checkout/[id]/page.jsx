import Checkout from "@/components/checkout/Checkout";

async function getData(id) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/courses/get-id-by-single-course?id=${id}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }) => {
  const { data } = await getData(params?.id);
  return <div className=""><Checkout data={data} /></div> ;
};

export default page;
