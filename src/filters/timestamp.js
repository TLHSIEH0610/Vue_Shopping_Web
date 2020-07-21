export default function (time) {
  const date = `${new Date(time * 1000).getFullYear()}/${new Date(
    time * 1000
  ).getMonth() + 1}/${new Date(time * 1000).getDate()}`
  return date
}
