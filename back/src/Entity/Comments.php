<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CommentsRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 */
class Comments
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"carInfo"})
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"carInfo"})
     */
    private $comment;

    /**
     * @ORM\ManyToOne(targetEntity=Cars::class, inversedBy="comments")
     */
    private $car;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="comments")
     * @Groups({"carInfo"})
     */
    private $userInfo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getCar(): ?Cars
    {
        return $this->car;
    }

    public function setCar(?Cars $car): self
    {
        $this->car = $car;

        return $this;
    }

    public function getUserInfo(): ?Users
    {
        return $this->userInfo;
    }

    public function setUserInfo(?Users $userInfo): self
    {
        $this->userInfo = $userInfo;

        return $this;
    }
}
