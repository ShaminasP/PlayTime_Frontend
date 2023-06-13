import { useSelector } from "react-redux";
import { getSalesReport } from "../../../API/Admin";
import { useEffect, useState } from "react";

const SalesReport = () => {
  const [reports, setReports] = useState([]);
  const { token } = useSelector((state) => state.admin);
  const fetchReport = async (token) => {
    const response = await getSalesReport(token);
    setReports(response?.data);
  };
  console.log(reports);

  useEffect(() => {
    fetchReport(token);
  }, []);

  return (
    // <div className="overflow-x-auto pt-20 bg-white min-h-screen">
    //   <table className="table w-full bg-white ">
    //     <thead className="bg-gray-200">
    //       <tr className="text-center border-b bg-gray-200">
    //         <th>Turf</th>
    //         <th>Total Bookings</th>
    //         <th>Total Amount</th>
    //         <th>Profit</th>
    //       </tr>
    //     </thead>
    //     <tbody className="bg-white">
    //       {reports.map((report, index) => (
    //         <tr className="text-center" key={index}>
    //           <th>{report.name[0]}</th>
    //           <td>{report.count}</td>
    //           <td>{report.totalPrice}</td>
    //           <td>{(report.totalPrice * 10) / 100}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <div className="container p-2 mx-auto sm:p-4 text-gray-800 mt-10 bg-white min-h-screen">
      <h2 className="mb-4 text-2xl font-semibold leading-tight"></h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
         
          <thead className="bg-gray-300">
            <tr className="text-center border-b bg-gray-200">
              <th className="p-3" >Turf</th>
              <th className="p-3">Total Bookings</th>
              <th className="p-3">Total Amount</th>
              <th className="p-3">Profit</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr className="text-center" key={index}>
                <th>{report.name[0]}</th>
                <td className="p-3">{report.count}</td>
                <td className="p-3">{report.totalPrice}</td>
                <td className="p-3">{(report.totalPrice * 10) / 100}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SalesReport;
