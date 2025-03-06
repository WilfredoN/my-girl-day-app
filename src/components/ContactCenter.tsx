export const ContactCenter = () => {
  return (
    <div className="flex h-12 w-48 flex-col text-left md:text-right">
      <h2>
        <b>{import.meta.env.VITE_PHONE_NUMBER}</b>
      </h2>
      <h3>Контакт-центр</h3>
    </div>
  )
}
