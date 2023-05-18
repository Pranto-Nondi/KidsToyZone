
import { Link, useLocation, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status, statusText } = useRouteError()
    const loc = useLocation();


    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
              
                <img class="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqeJivZ25FtsVjt28LGTqkkK96IOg5zDJenGtn-LDakE4O0QpgQc2FZvTbsNH7UYXuNU&usqp=CAU" alt="" />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                   
                    <p className='text-xl font-semibold md:text-3xl mb-8'>
                        Data Not Found
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-lime-200 text-gray-900'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage
