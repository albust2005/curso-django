import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog } from "redux/actions/blog";


function BlogPost(){

    const uuid = useParams();

    useEffect(() => {
        get_blog(uuid)
    },[])

    return (
        <div>
            <FullWidthLayout>
                Home
            </FullWidthLayout>
        </div>
    )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list
})

export default connect(mapStateToProps, {

})(BlogPost)