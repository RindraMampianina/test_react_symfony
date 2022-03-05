<?php

namespace App\Entity;

use App\Repository\CommentsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;


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
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $comment;

    /**
     * @ORM\ManyToOne(targetEntity=Cars::class, inversedBy="comments")
     */
    private $car;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="comments")
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
