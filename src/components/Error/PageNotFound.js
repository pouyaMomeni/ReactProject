import { Link } from "react-router-dom"
import { Button } from "reactstrap"


const PageNotFound = () => {
    return (
        <div>
            <h1 className="text-center mt-5">صفحه ی مورد نظر یافت نشد 404 :(</h1>
            <h2 className="text-center mt-5">برگشت به <Button onClick={() => (window.location.href = "/start")}>خانه</Button></h2>
        </div>
    )
}

export default PageNotFound