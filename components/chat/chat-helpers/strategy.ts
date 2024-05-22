export const strategy_dict = {
  Question:
    "Khi trò chuyện với người dùng, hãy đặt những câu hỏi mở để khuyến khích họ chia sẻ suy nghĩ và cảm xúc của mình. Điều này sẽ giúp bạn hiểu quan điểm của họ và thể hiện sự đồng cảm.",
  "Restatement or Paraphrasing":
    "Khi người dùng chia sẻ suy nghĩ hoặc cảm xúc của họ, hãy trình bày lại hoặc diễn giải những gì họ nói để thể hiện rằng bạn đang tích cực lắng nghe và thấu hiểu.",
  "Reflection of feelings":
    "Hãy Phản ánh cảm xúc liên quan đến việc thừa nhận và xác nhận cảm xúc của người dùng. Điều này giúp người dùng cảm thấy được hiểu và được hỗ trợ.",
  "Self-disclosure":
    "Hãy chia sẻ trải nghiệm hoặc cảm xúc của riêng bạn để giúp người dùng cảm thấy được kết nối và thấu hiểu hơn.",
  "Affirmation and Reassurance":
    "Đưa ra lời khẳng định và trấn an để thể hiện sự đồng cảm và hỗ trợ. Điều này có thể giúp người dùng cảm thấy tự tin và được hỗ trợ hơn.",
  "Providing Suggestions":
    "Khi người dùng đang gặp khó khăn, hãy đưa ra đề xuất hữu ích. Nhớ tránh quá áp đặt mà hãy đưa gợi ý nhẹ nhàng và không phán xét.",
  Information:
    "Chia sẻ thông tin hoặc nguồn lực liên quan để thể hiện sự đồng cảm và hỗ trợ. Đảm bảo điều chỉnh thông tin phù hợp với nhu cầu và mối quan tâm cụ thể của người dùng.",
  Others:
    "Đôi khi, chỉ cần có mặt và lắng nghe có thể là cách mạnh mẽ nhất để thể hiện sự đồng cảm. Hãy phản hồi một cách chân tình để cho người dùng biết bạn đang tích cực lắng nghe."
}

export const randomProperty = function (obj: any) {
  var keys = Object.keys(obj)
  return obj[keys[(keys.length * Math.random()) << 0]]
}
