const SectionHeading = ({ children }) => {
  return (
    <h2 className="text-2xl sm:text-4xl font-medium capitalize w-full flex justify-center mb-10 mt-10 sm:mt-0">
      {children}
    </h2>
  );
};

export default SectionHeading;
