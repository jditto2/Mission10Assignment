using System.ComponentModel.DataAnnotations;

namespace backend.Data
{
    public class Team
    {
        [Key]
        public int TeamId { get; set; }

        [Required]
        [MaxLength(50)]
        public string TeamName { get; set; }
    }
}
