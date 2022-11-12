import { useAddCategoriesMutation } from '../../../redux/goodsApi';
import Spinner from '../../../ui/Spinner/Spinner';
import AddButton from '../../../ui/Button/AddButton/AddButton';
import { successAddCategories, errorAddCategories } from '../../../utils/list';
import InputText from '../../../ui/Input/InputText';

const FormAddCategories = () => {
  const [addCategories, isLoading] = useAddCategoriesMutation();

  const handleAddCategories = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let name = e.target.name.value;
    let visibleName = e.target.visibleName.value;
    let image = e.target.image.value;
    if (name === '' || visibleName === '' || image === '') {
      errorAddCategories();
    } else {
      successAddCategories();
      await addCategories({
        name: name,
        visibleName: visibleName,
        image: image,
      }).unwrap();
      e.target.name.value = '';
      e.target.visibleName.value = '';
      e.target.image.value = '';
    }
  };

  if (!isLoading) return <Spinner />;

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-6 text-[20px] dark:text-white'>Форма для додавання категорій</div>
      <form
        onSubmit={handleAddCategories}
        className='flex flex-col max-w-[500px] border-2 p-6'
      >
        <InputText
          labelName={'Назва на англійській '}
          type={'text'}
          name={'name'}
          placeholder={'strategies'}
        />
        <InputText
          labelName={'Назва на українській'}
          type={'text'}
          name={'visibleName'}
          placeholder={'Стратегії'}
        />
        <InputText
          labelName={'зображення для категорії'}
          type={'text'}
          name={'image'}
          placeholder={'URL зображення'}
        />
        <AddButton text={'Додати категорію'} />
      </form>
    </div>
  );
};

export default FormAddCategories;
