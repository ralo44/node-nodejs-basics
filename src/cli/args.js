const parseArgs = () => {
//   const arguments = process.argv;
//   console.log(process.argv[2]);
  console.log(
    `${process.argv[2].slice(2)} is ${process.argv[3]},`,
    `${process.argv[4].slice(2)} is ${process.argv[5]},`,
    `${process.argv[6].slice(2)} is ${process.argv[7]}`
  );
};

parseArgs();