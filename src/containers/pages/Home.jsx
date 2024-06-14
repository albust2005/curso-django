import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";

function Home({ get_blog_list, get_blog_list_page, blog_list }) {
  useEffect(() => {}, []);

  return (
    <div>
        <FullWidthLayout>
            Home
        </FullWidthLayout>
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Home);
