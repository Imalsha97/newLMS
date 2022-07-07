import React, { useState, useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";

 import Tabs from "../components/Tabs"
// import Spinner from "../../components/Spinner";

// import Books from "../Dashboard/Books/index";
// import Members from "../Dashboard/Members/index";

// import { setBooks } from "../../store/booksSlice";
// import { setMembers } from "../../store/memberSlice";

// import { getBooks } from "../../api/bookAPI";
// import { getMembers } from "../../api/memberAPI";

export const Dashboard = () => {
//    const [isLoading, setIsLoading] = useState(false);

//    const books = useSelector((state) => state.books.value);
//    const members = useSelector((state) => state.members.value);
//    const dispatch = useDispatch();

//    useEffect(() => {
//       setIsLoading(true);
//       getBooks()
//          .then((response) => {
//             if (!response.error) {
//                dispatch(setBooks(response.data));
//             }
//          })
//          .catch((error) => {
//             console.log( error);
//          });
//       getMembers()
//          .then((response) => {
//             if (!response.error) {
//                dispatch(setMembers(response.data));
//             }
//          })
//          .catch((error) => {
//             console.log( error);
//          })
//          .finally(() => {
//             setIsLoading(false);
//          });
//    }, [dispatch]);

   const contents = [
      { title: "Books", elements: <h1>Books</h1>},
      { title: "Members", elements: <h1>members</h1>},
   ];

   return (
    <Tabs contents={contents} />
   ); 
};

export default Dashboard;
