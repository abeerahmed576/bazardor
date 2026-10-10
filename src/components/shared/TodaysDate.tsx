function TodaysDate({ styles }: { styles?: string }) {
  return (
    <p className={`font-light ${styles ? styles : ""}`}>
      {new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })}
    </p>
  );
}

export default TodaysDate;
