import Link from "next/link"

function test(){

  return (
    <div>
      <Link href={'/product'}>Product</Link> <br/>
      <Link href={'/login'}>Login</Link> <br/>
      <Link href={'/facebook'}>Like</Link>
      <h1>Hello!</h1><br/>
      <br/>
      <input placeholder="Enter your Fullname"/> <br/>
      <button>Save</button><br/>
      
    </div>
  )
}

export default test