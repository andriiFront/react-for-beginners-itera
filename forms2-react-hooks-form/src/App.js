import './App.css';
import { useForm } from 'react-hook-form'

let renderCount = 0;

function App() {
  const { 
    register,
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      firstName: "bill",
      lastName: "luo"
    }
  })

  renderCount++

  return (
    <div className="App">
      {renderCount}
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <input
          {...register(
            "firstName",
            {required: "This is required"}
          )}
        />

        <p>{formState.errors.firstName?.message}</p>

        <input
          {...register(
            "lastName",
            {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min length is 4"
              }
            }
          )}
        />

        <p>{formState.errors.lastName?.message}</p>
    
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
