import { useSelector } from 'react-redux';

const Categories = () => {
  const { status } = useSelector((store) => store.category);
  return (
    <div>
      {status}
    </div>
  );
};

export default Categories;
