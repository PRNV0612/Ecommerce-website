import { Button } from "@/components/ui/button"

const Page = () => {
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold pb-10">404 Not Found</h1>
        <p className="pb-10">Your visited page not found. You may go home page.</p>
        <Button className="bg-red-500 w-56">Back to Home Page</Button>
    </div>
  )
}

export default Page
