export async function GET() {
    return Response.json(
        {
          id: 1,  
          grade: 1,
          room: 1,
          students: [],
          teacher: "ครูณัฐวุฒิ"
        }
    )
}