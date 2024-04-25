 export  const ReportCard = ({ title, amount, type, iconUrl,TextColor,bg}) => (
    <div className="col-lg-6">
      <div className={`bg-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center ${type,bg}`}>
        <div className="mr-4">
          <img className="w-16 h-16 rounded-full" src={iconUrl} alt="icon" />
        </div>
        <div className="text-center">
          <h2 className={`text-2xl font-bold ${TextColor}`}>{amount}</h2>
          <div className="text-sm font-medium">{type}</div>
        </div>
      </div>
    </div>
  );
  
  export const ChartLabel = ({ colorClass, info }) => (
    <div className="flex items-center mb-2">
      <span className={`w-4 h-4 mr-2 rounded-full ${colorClass}`}></span>
      <span className="text-sm">{info}</span>
    </div>
  );