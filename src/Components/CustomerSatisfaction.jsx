import CustomerReviewList from './CustomerReviewList'; // Assuming this component is imported correctly

const CustomerSatisfactionCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800 md:mb-0">Customer Satisfaction</h5>
        <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/satisfactions.png" alt="satisfaction" className="w-12 h-12 md:ml-4" />
      </div>
      <div className="flex items-center mb-4">
        <h4 className="text-xl font-bold text-blue-600 mr-2 md:text-3xl">1</h4>
        <span className="text-gray-600 text-lg md:text-xl">Review Received</span>
      </div>
      <CustomerReviewList />
    </div>
  );
};

export default CustomerSatisfactionCard;
