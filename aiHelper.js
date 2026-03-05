function aiGenerateReply(customerText){
  // Example placeholder logic
  if(customerText.toLowerCase().includes("busy")){
    return "No worries, I only need 20 seconds. Can I tell you why I called?";
  }
  if(customerText.toLowerCase().includes("price")){
    return "Fair question. Our packages range from £79 to £749. I can show you the exact plan in 10 minutes.";
  }
  return "Thanks for sharing! Let's continue.";
}
