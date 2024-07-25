function status(request, response) {
  response.status(200).json({ chave: "Online" });
}

export default status;
